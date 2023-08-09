import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {Button, Select, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {useForm} from "react-hook-form";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {getTripsByUserIdAsync} from "../../trip/reducers/thunksTrip";
import {getExperiencesByTripIdAsync} from "../../experience/reducers/thunksExperience";
import MediaFileUploader from "../../helpers/media-files/media-file-uploader.mjs";
import ObjectID from "bson-objectid";

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

function MemoryForm(props, children) {
    const memories = useSelector((state) => state.mem.memories);


    const dispatch = useDispatch();

    const user = useAuth0();

    const userId = props.userId;
    const [uploadedUrl, setUploadedUrl] = useState('');


    const handleChangeStatus = ({meta}, status) => {
        console.log(status, meta);
    };

    const uploadUrl = useSelector(state => state.s3.uploadUrl);

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);


    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        description: '',
        latitude: '',
        longitude: '',
        userId: {userId},
        tripId: '',
        experienceId: ''
    });

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }


    const [trips, setTrips] = useState(props.trips);
    const [experiences, setExperiences] = useState(props.experiences);
    const [selectedTripId, setSelectedTripId] = useState('');
    const [selectedExperienceId, setSelectedExperienceId] = useState('');

    const {error, pristine, submitting} = props;
    return (
        <>
            <form id="MemoryForm" onSubmit={handleSubmit(onSubmit)}>


                <TextField id="title" label="Title" InputLabelProps={{shrink: true}} fullWidth={true}
                           required={props.isShown}
                           onChange={onChangeInput}  {...register("title", {required: true})}></TextField><br/><br/>
                <TextField id="description" label="Description" multiline={true} rows="5"
                           InputLabelProps={{shrink: true}} fullWidth={true}
                           onChange={onChangeInput} {...register("description", {required: true})}></TextField><br/><br/>
                <TextField id="latitude" label="Latitude" aria-valuemin={-90} aria-valuemax={90}
                           InputLabelProps={{shrink: true}} type={"number"} inputProps={{
                    step: 0.001,
                }} defaultValue={34.6937} {...register("latitude")}></TextField>
                <TextField id="longitude" label="Longitude" aria-valuemin={-180} aria-valuemax={180}
                           InputLabelProps={{shrink: true}} defaultValue={135.5023} type={"number"} inputProps={{
                    step: 0.001,
                }} onChange={onChangeInput} {...register("longitude")}></TextField><br/><br/>
                <MediaFileUploader onChange={onChangeInput} id="mediaFile"></MediaFileUploader>
                <TextField id="userId" hidden={true} label="User" value={userId}
                           InputProps={{readOnly: true, hidden: true}} InputLabelProps={{shrink: true}}
                           fullWidth={true} {...register("userId", {required: true})}></TextField><br/><br/>

                <Select id="experienceId" label="Experience" fullWidth={true} native
                        {...register("experienceId", {required: true})} onChange={onChangeInput}>
                    {
                        experiences.map(function (experience) {
                            return (
                                <option key={experience._id} value={experience._id}>{experience.Title}</option>
                            )
                        })
                    }
                </Select>
                <br/><br/>

                <Button>Add Memory</Button>


            </form>
        </>
    )
        ;
}

export default MemoryForm;
