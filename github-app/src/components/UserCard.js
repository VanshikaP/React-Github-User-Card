import React, { Component } from 'react'
import Axios from 'axios';

import Container from '@material-ui/core/Container'

// import {GitHubCalendar} from 'github-calendar'

class UserCard extends Component {
   state = {
            userData: [],
            followers: [],
            followers_display: false,
            following: [],
            following_display: false,
            repos: []
        }
    componentDidMount(){
        //Setting UserData
        Axios.get('https://api.github.com/users/VanshikaP')
        .then(response => {
            console.log(response.data);
            this.setState({
                ...this.state, userData: response.data
            })
        })
        .catch(err => console.log('Error ', err.message))       
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Previous: ', Object.keys(prevState.userData).length, 'Current: ', Object.keys(this.state.userData).length)
        if(prevState.userData !== this.state.userData){

             // Setting Followers

            Axios.get(this.state.userData.followers_url)
            .then(response => {
                this.setState({
                    ...this.state, followers: response.data
                })
                console.log('No. of Followers', response.data.length)
            })
            .catch(err => console.log('Error', err.message));

            // Setting Following

            Axios.get(`https://api.github.com/users/${this.state.userData.login}/following`)
            .then(response => {
                this.setState({
                    ...this.state, following: response.data
                })
                console.log('No. of Following', response.data.length)
            })
            .catch(err => console.log('Error', err.message));
        }
    }

    handleFollowersDisplay = () => {
        this.setState({
            ...this.state,
            followers_display: !this.state.followers_display
        })
    }

    handleFollowingDisplay = () => {
        this.setState({
            ...this.state,
            following_display: !this.state.following_display
        })
    }

    render() {
        console.log('user data', this.state)
        return (
            <Container maxWidth='md' className='user-container'>
                
                <Container className = 'info'>
                    <img className='info-img' src={this.state.userData.avatar_url} alt={`${this.state.userData.name}`} />
                    <Container className='info-text'>
                        <h2>{this.state.userData.name}</h2>
                        <p>GitHub Username: {this.state.userData.login} </p>
                        <p>Profile: <a href={this.state.userData.html_url}>{this.state.userData.html_url}</a></p>
                    </Container>
                </Container>

                <Container className='people'>
                    <Container maxWidth='md' className='followers'>
                        <p> {this.state.followers.length} <span className='people-display' onClick={this.handleFollowersDisplay}>followers</span></p>
                        <div className={`people-div ${!this.state.followers_display ? ' close' : ''}`}>
                            {this.state.followers.map(follower => {
                                return (
                                    <div className='people-card'>
                                        <img className='people-img' src={follower.avatar_url} alt={follower.login} />
                                        <a href={follower.html_url}>{follower.login}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </Container>
                    <Container maxWidth='md' className='following'>
                        <p> {this.state.following.length} <span className='people-display' onClick={this.handleFollowingDisplay}>following</span></p>
                        <div className={`people-div ${!this.state.following_display ? ' close' : ''}`}>
                            {this.state.following.map(following => {
                                return (
                                    <div className='people-card'>
                                        <img className='people-img' src={following.avatar_url} alt={following.login} />
                                        <a href={following.html_url}>{following.login}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </Container>
                </Container>
                <Container className='git-chart'>
                    <img className='git-chart-img' src={`https://ghchart.rshah.org/409ba5/${this.state.userData.login}`} alt={`${this.state.userData.name}'s Github chart`} />
                    {/* {new GitHubCalendar('calendar', 'VanshikaP')} */}
                    <h3>Contribution Chart</h3>
                </Container>
            </Container>
        )
    }
}

export default UserCard

// USING FUNCTION AND HOOKS

// import React, {useState, useEffect} from 'react'
// import Axios from 'axios'

// function UserCard(props) {
//     const [followers, setFollowers] = useState(0);
//     const [following, setFollowing] = useState(0);


//     // Setting Followers and Following
//     useEffect(() => {
//         Axios.get(props.userData.followers_url)
//         .then(response => {
//             console.log('response recieved', response.data.length);
//             setFollowers(response.data.length)
//             console.log('No. of Followers', response.data.length)
//         })
//         .catch(err => console.log('Error', err.message));

//         Axios.get(`https://api.github.com/users/${props.userData.login}/following`)
//         .then(response => {
//             console.log('response recieved', response.data.length);
//             setFollowing(response.data.length)
//             console.log('No. of Following', response.data.length)
//         })
//         .catch(err => console.log('Error', err.message));
//     }, [props.userData])

//     return (
//         <div className='user-container'>
//             <img className='user-img' src={this.state.userData.avatar_url} alt={`${this.state.userData.name}'s picture`} />
//             <h2> {props.userData.name} </h2>
//             <div className = 'basic'>
//                 <p>GitHub Username: {props.userData.login} </p>
//                 <p>Profile: {props.userData.html_url} </p>
//                 <div className='connections'>
//                     <p>{followers} followers</p>
//                     <p>{following} following</p>
//                 </div>
//                 <img className='git-chart' src={`https://ghchart.rshah.org/409ba5/${this.state.userData.login}`} alt={`${this.state.userData.name}'s Github chart`} />
//             </div>
//         </div>
//     )
// }

// export default UserCard

