import * as request from '~/unlti/request' ;

export const search = async (q )=> {
    try {
        const res = await request.get(`search`,{
            params: {
                q,         
            }
        })
        return res.data
    
    } catch (error) {
        console.log(error);
        
    }
        
}


