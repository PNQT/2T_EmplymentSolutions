<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('requirements')->nullable();
            $table->text('benefits')->nullable();
            $table->text('companyInfo')->nullable();
            $table->string('location');
            $table->string('employmentType');
            $table->decimal('salary', 10, 2)->nullable();
            $table->date('deadline')->nullable();
            $table->string('contactEmail');
            $table->string('contactPhone')->nullable();
            $table->text('applicationProcess')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('jobs');

    }
};


