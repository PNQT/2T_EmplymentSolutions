<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function index()
    {
        return Job::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'requirements' => 'nullable|string',
            'benefits' => 'nullable|string',
            'companyInfo' => 'nullable|string',
            'location' => 'required|string',
            'employmentType' => 'required|string',
            'salary' => 'nullable|numeric',
            'deadline' => 'nullable|date',
            'contactEmail' => 'required|email',
            'contactPhone' => 'nullable|string',
            'applicationProcess' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Xử lý tải lên ảnh
        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $imageName);
            $validatedData['image'] = 'uploads/' . $imageName;
        }

        // Lưu dữ liệu vào database
        $job = Job::create($validatedData);

        return response()->json([
            'message' => 'Job posted successfully',
            'job' => $job
        ], 201);
    }

    public function show($id)
    {
        return Job::find(id: $id);
    }

    public function update(Request $request, $id)
    {
        $job = Job::findOrFail($id);
        $job->update($request->all());
        return response()->json($job, 200);
    }

    public function destroy($id)
    {
        Job::destroy($id);
        return response()->json(null, 204);
    }
}