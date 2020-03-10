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
//             <h2> {props.userData.name} </h2>
//             <div className = 'basic'>
//                 <p>GitHub Username: {props.userData.login} </p>
//                 <p>Profile: {props.userData.html_url} </p>
//                 <div className='connections'>
//                     <p>{followers} followers</p>
//                     <p>{following} following</p>
//                 </div>
//                 {/* < */}
//             </div>
//         </div>
//     )
// }

// export default UserCard


// CLASS TEST
import React, { Component } from 'react'
import Axios from 'axios';

class UserCard extends Component {
   state = {
            userData: [],
            followers: [],
            following: [],
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

    render() {
        console.log('user data', this.state)
        return (
            <div className='user-container'>
                <img className='user-img' src={this.state.userData.avatar_url} />
                <h2> {this.state.userData.name} </h2>
                <div className = 'basic'>
                    <p>GitHub Username: {this.state.userData.login} </p>
                    <p>Profile: {this.state.userData.html_url} </p>
                    <div className='followers'>
                        <p> {this.state.followers.length} followers</p>
                        <p> {this.state.following.length} following</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard

