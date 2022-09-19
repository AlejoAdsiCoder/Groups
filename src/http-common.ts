import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4YTVlMTFiLWRiZDktNDBlZS1hZjA4LTMyYzBjMDBiYmM5ZiIsIm1haWwiOiJmcm9udC10ZXN0LTQzMUBmb3J0ZXhkZXNpZ24uY29tIiwibmFtZSI6IkRldmVsb3BlciIsIm9yZ2FuaXphdGlvbklkIjoiNWFkYTVmODQtOTY5ZC00NWIzLTg1OGMtZDQ5YjBmNDQ5ODA0IiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2NjMzNDMzMjAsImV4cCI6MTY2Mzk0ODEyMH0.09JRLe7Bj4Z8oFtR9PP1wOXp5duIIha1isW_Hd94zCA'


export default axios.create ({
    baseURL: "https://demo-api-work-test.herokuapp.com/",
    headers: {
        'Authorization': `${token}`
    }
});
