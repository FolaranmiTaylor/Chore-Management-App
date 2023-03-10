import React from "react";
import API from "../../utils/API";
import TeamCard from '../../components/Card/TeamCard';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';


export class Team extends React.Component {

    state = {
        children: [],
        sampleChildren: [],
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Team - Parent Id: ' + pid);
        this.loadTeamSection(pid);
    }

    loadTeamSection (pid) {
        API.loadTeamSec(pid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({children: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };



    /** constructor() {
        super();
        this.sampleChildren = [
            {
                first_name: "Maya",
                nickname: "Supergirlie",
                points: "5",
                avatar: "1"
            },
            {
                first_name: "Tim",
                nickname: "Tiny",
                points: "15",
                avatar: "1"
            },
        ]
    } **/

    render() {

        if (this.state.children.length > 0) {
            return (
                <div className="container">
                    <h1>Team</h1>
                    <Link to='/parent/team/addchild'>
                    <FlatButton style={{backgroundColor:'red',fontWeight:'bold', fontFamily: "Avengeance Mightiest", marginBottom:'15px'}} >
                        Add Child
                    </FlatButton></Link>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.children)}
                            {this.state.children.map((each, i) => {
                               // console.log(each);
                               // console.log(i);
                                return <TeamCard key={i} first_name={each.first_name} nickname={each.nickname}
                                                  points={each.points} avatar={each.avatar.avatar_url}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <h1>Team</h1>
                    <div>
                        <p>There are no children on file</p>
                    </div>
                </div>
            );
        }
    }
}

