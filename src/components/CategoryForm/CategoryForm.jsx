import React, {useContext, useEffect, useState} from 'react';
import {assests} from "../../assets/Assests.js";
import toast from "react-hot-toast";
import {addCategory} from "../../service/categoryService.js";
import {AppContext} from "../../context/AppContext.jsx";

const CategoryForm = () => {

    const {setCategories,categories} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        bgColor:"#2c2c2c",
    });

    useEffect(() => {
        console.log(data)
    }, [data]);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData(()=>({...data, [name]: value}));
    }


    // this code use when the S3 bucket is created to store images

    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     if (!image) {
    //         toast.error('upload the image for category');
    //         return;
    //     }
    //     setLoading(true);
    //     const formData = new FormData();
    //     formData.append("category",JSON.stringify(data));
    //     formData.append("file",image);
    //     try {
    //        const response = await addCategory(formData);
    //        if (response.status === 201) {
    //            setCategories([...categories, response.data]);
    //            toast.success('Category added successfully.');
    //            setData({
    //                name: "",
    //                description: "",
    //                bgColor: "#2c2c2c",
    //            });
    //            setImage(false);
    //        }
    //     }catch(err) {
    //         console.log(err);
    //         toast.error("error adding the category");
    //     }finally {
    //         setLoading(false);
    //     }
    //
    // }


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const payload = {
                ...data,
                imageUrl: image ? image : "",
            };

            const response = await addCategory(payload);

            if (response.status === 201) {
                setCategories([...categories, response.data]);
                toast.success('Category added successfully.');

                setData({
                    name: "",
                    description: "",
                    bgColor: "#2c2c2c",
                });
                setImage("");
            }
        } catch (err) {
            console.error("Add category error:", err);
            toast.error("Error adding the category");
        } finally {
            setLoading(false);
        }
    };




    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-12 form-container">
                    <div className="card-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image): assests.upload} alt="" width={48}/>
                                </label>
                                <input type="file" name="image" id="image" className="form-control" hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       className="form-control"
                                       placeholder="CategoryName"
                                        onChange={onChangeHandler}
                                       value={data.name}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea rows="5"
                                          name="description"
                                          id="description"
                                          className="form-control"
                                          placeholder="Write Content Here..."
                                          onChange={onChangeHandler}
                                          value={data.description}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bg-color" className="form-label">Background Color</label>
                                <br/>
                                <input type="color"
                                       name="bgColor"
                                       id="bgcolor"
                                       placeholder="#ffffff"
                                       onChange={onChangeHandler}
                                       value={data.bgColor}
                                />
                            </div>
                            <button type="submit"
                                    disabled={loading}
                                    className="btn btn-primary w-100">{loading ? "Loading..." : "submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryForm;