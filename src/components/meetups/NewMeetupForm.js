import { useRef } from 'react';

import card from '../ui/card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm() {
    const titleInputRef = useRef();
    const  imageInputRef = useRef();
    const  addressInputRef = useRef();
    const  descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        console.log(meetupData);


    }
    return <card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlfor= 'title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlfor='image'>Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlfor='address'>Address</label>
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlfor='description'>Description</label>
                <input type="text" required id="description" ref={descriptionInputRef}/>
                <textarea id='description' required rows='5'></textarea>
            </div>
            <div className={classes.action}>
                <button>Add Meetup</button>
            </div>




        </form>
        
    </card> 

}

export default NewMeetupForm;