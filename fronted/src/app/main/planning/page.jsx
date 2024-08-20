"use client"
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Link from 'next/link';

const page = () => {
    const [services, setServices] = useState([]);


    const { category } = useParams();

    const fetchPlanningServices = async () => {
        const res = await fetch("http://localhost:5000/services/getbyscategory/planning");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (category) {
            setServices(data.filter((ser) => ser.category === category));
        } else {
            setServices(data);
        }
    };

    useEffect(() => {
        fetchPlanningServices();
    }, []);

    const displayServices = () => {
        return services.map((service) => (
            <div className="max-w-3xl mx-auto shadow-lg border p-4 rounded-lg mb-8">
                <div className="grid grid-cols-3">
                    <div className="image col-span-1">
                        <img
                            className=""
                            src={"http://localhost:3000/" + service.simage}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2">
                        <h2>{service.sname}</h2>
                        <p>{service.sdescription}</p>
                        <Link href={'/main/view/' + service._id} className="btn btn-outline-primary m-2">Know More</Link>
                       
                    </div>

                </div>
            </div>
        ));
    };

    return (
        <div>
            <h1>Planning Services</h1>
            {displayServices()}
        </div>
    )
}

export default page


{/* <img
                                    className="img-fluid p-card-img"
                                    src={"http://localhost:3000/" + service.simage}
                                    alt=""
                                /> */}

{/* <Link to={'/view/' + service._id} className="btn btn-outline-primary m-2">Know More</Link> */}
