import axios from 'axios';


const baseUrl = 'https://api2.growthgrids.com/api/us';
// const baseUrl = 'https://web.growthgrids.com/api/user';
// 
// const baseUrl = 'localhost:8080/api/user';
const SeoConstants = async (formdata)=>{
    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded',
 };
    try {
        const response = await axios.post(`${baseUrl}/seo-search-meta-list`, formdata,{headers});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}


const submitContactUsForm = async (formData) => {
    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded',
 };
    try {
        const response = await axios.post(`${baseUrl}/contect-us-create`, formData,{headers});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const ApplyJob = async (  type , data) => {
    const headers = { 
        'Content-Type': type ? 'multipart/form-data' : 'application/x-www-form-urlencoded' ,
 };
    try {
        const response = await axios.post(`${baseUrl}/careers`, data, { headers });
        console.log(response)
        return response;
    } catch (error) {

        throw new Error(error.response.data.message);
    }
};

const sendEmail = async (type,formData) => {
    console.log(formData,'formdata');
    const headers = { 
        'Content-Type': type ? 'multipart/form-data' : 'application/x-www-form-urlencoded' ,
 };
    try {
        const response = await axios.post(`${baseUrl}/send-email`, formData,{ headers});
        const result = await response.json();
        if (response) {
            return result; 
        }
    } catch (error) {
        return { error: error.message };
    }
};




export const GrowthgridsApiList = {
    ApplyJob,
    submitContactUsForm,
    sendEmail,
    SeoConstants
};