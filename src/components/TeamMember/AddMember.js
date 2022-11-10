import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import { SketchPicker } from 'react-color';
import axios from 'axios';

class AddMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            photoUrl: '',
            story: '',
            favoriteColor: '#3466F2',
        }
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }
    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handlePhotoUrlChange(e) {
        this.setState({ photoUrl: e.target.value });
    }
    handleStoryChange(e) {
        this.setState({ story: e.target.value });
    }
    handleColorChange = (color) => {
        this.setState({ favoriteColor: color.hex });
    }
    async handleSubmit() {
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            title: this.state.title,
            photoUrl: this.state.photoUrl,
            story: this.state.story,
            favoriteColor: this.state.favoriteColor,
        };
        try {
            await axios.post('/add_member', body);
        } catch {
            console.log("Add Member failed");
        }
    }

    render() {
        return (
            <>
                <div className="header"><h2>Join the team</h2></div>
                <div className="content">
                    <form action="/action_page.php">
                        <br />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={(e) => this.handleFirstNameChange(e)}
                            placeholder="First Name"
                            required
                        /><br /><br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={(e) => this.handleLastNameChange(e)}
                            placeholder="Last Name"
                            required
                        /><br /><br />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={(e) => this.handleTitleChange(e)}
                            placeholder="Title"
                            required
                        /><br /><br />
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            value={this.state.photoUrl}
                            onChange={(e) => this.handlePhotoUrlChange(e)}
                            placeholder="Photo URL"
                        /><br /><br />
                        <textarea
                            id="story"
                            name="story"
                            value={this.state.story}
                            onChange={(e) => this.handleStoryChange(e)}
                            placeholder="Story"
                            required
                        /> <br /><br />
                        <label for="favoriteColor">Favorate Color</label>
                        <SketchPicker
                            className="sketchDiv"
                            color={this.state.favoriteColor}
                            onChangeComplete={this.handleColorChange}
                        /><br />
                        <button className="btn btn-default" onClick={() => this.handleSubmit()}>Join</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddMember;

