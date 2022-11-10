import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';
import AddMember from './AddMember';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TeamMember extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        };
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photoUrl: PropTypes.string,
        story: PropTypes.string,
        favoriteColor: PropTypes.string
    };

    static defaultProps = {
        photoUrl: CodelitEmptyAvatar,
        story: null,
        favoriteColor: '#3466F2'
    };

    render() {
        return (
            <div className="container">

                <header>
                    <div className="avatar-container">
                        <img
                            className="avatar"
                            src={this.props.photoUrl === '' ? CodelitEmptyAvatar : this.props.photoUrl}
                            alt={this.props.name}
                        />
                    </div>
                    <h2 className="title">{this.props.title}</h2>
                    <h1 className="name">{this.props.name}</h1>
                </header>
                {this.props.type === "new" ?
                    <Popup
                        className="popupDiv"
                        trigger={<button className="btn btn-default join-btn">Join the team!</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <AddMember />
                            </div>
                        )}
                    </Popup>
                    :
                    <></>
                }

                <div className="body">{this.props.story}</div>
                <footer style={{ backgroundColor: this.props.favoriteColor }}>
                    <div className="full-width-flex-box">
                        <div className="one-third-flex-box stat">9.0</div>
                        <div className="one-third-flex-box stat bordered">9.0</div>
                        <div className="one-third-flex-box stat">9.0</div>
                    </div>
                    <div className="full-width-flex-box">
                        <div className="one-third-flex-box">CANDID</div>
                        <div className="one-third-flex-box">LEARNING</div>
                        <div className="one-third-flex-box">GRIT</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default TeamMember;
