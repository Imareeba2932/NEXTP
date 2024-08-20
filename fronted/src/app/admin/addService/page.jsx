"use client"
import React,{useState} from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const page = () => {
    const [selFile, setSelFile] = useState("");

    const [markdownContent, setMarkdownContent] = useState("**Add Services**");

    const addServiceForm = useFormik({
        initialValues: {
            sname: '',
            scategory: '',
            sdescription: '',
            simage: ''
        },
        onSubmit: async (values, action) => {
            values.simage = selFile;
            values.content = markdownContent;
            console.log(values);


            const res = await fetch('http://localhost:5000/services/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                toast.success('Services Added Successfully');
                router.push('/main/services');

            } else {
                toast.error('Something went wrong');
            }
        },
        // validationSchema: AddServicesSchema
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:3000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    const router = useRouter();

    return (
        <div>
            <h1 className="text-center">Add Services</h1>
            <div className='mt-5'>
                <MDEditor value={markdownContent} onChange={(v) => setMarkdownContent(v)} />
            </div>
            <form onSubmit={addServiceForm.handleSubmit}>
                <p className='error-label'> {addServiceForm.touched.sname && addServiceForm.errors.sname}</p>
                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-10" placeholder="Service Name" id="sname" onChange={addServiceForm.handleChange} value={addServiceForm.values.sname} />
                <p className='error-label'> {addServiceForm.touched.scategory && addServiceForm.errors.scategory}</p>
                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2" placeholder="Service Category" id="scategory" onChange={addServiceForm.handleChange} value={addServiceForm.values.scategory} />
                <p className='error-label'> {addServiceForm.touched.sdescription && addServiceForm.errors.sdescription}</p>
                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2" placeholder="Service Description" id="sdescription" onChange={addServiceForm.handleChange} value={addServiceForm.values.sdescription} />
                <input type="file" className="form-control w-50 mt-5" placeholder="Upload Image" onChange={uploadFile} />
                <button type="submit" className="btn btn-primary mt-4" onChange={addServiceForm.handleChange}>Add Service</button>
            </form>
        </div>
    )
}

export default page
