import { Component } from 'react';

import { MyActivity } from './MyActivity';
import { Header } from './Header';
import { Nav } from './Nav';
import { Home } from './Home';
import { AddActivity } from './AddActivity';

// import { ActivityList } from './components/ActivityList';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [
                {
                    name: 'sleep',
                    date: new Date('1/2/2017').toLocaleDateString(),
                    time: '7:00am',
                    progress: 10,
                    notes: '',
                    key: 0

                },
                {
                    name: 'eat',
                    date:  new Date('1/2/2017').toLocaleDateString(),
                    time: '7:00am',
                    progress: 10,
                    notes: '',
                    key: 1


                },
                {
                    name: 'study',
                    date:  new Date('1/2/2017').toLocaleDateString(),
                    time: '7:00am',
                    progress: 10,
                    notes: '',
                    key: 2

                }
            ],
            links :[
                {url:'#',label:'Home',key:0},
                {url:'#list',label:'My Activity',key:1},
                {url:'#add',label:'Create Activity',key:2},
            ]
        }

        this.addActivity = this.addActivity.bind(this);
    }


    countTotals(list, filter) {
        if (list) {
            return list.reduce(function (acc, val) {
                return acc + val[filter];
            }, 0);
 
        } else {
            return 0;
        }
    }

    getHeader(pathName){
        let s = {title:"Home",subtitle:"Welcome to  My Activity App created with ReactJS"};
        switch(pathName){
            case "/add": s.title="Add Activity";s.subtitle="Add your activity from the form";break;
            case "/list": s.title="Activity List";s.subtitle="List of all your activity per time and date ";break;            
        }
        return s;
    }

    addActivity(newActivity){
       
        this.setState({
            activities: [
                ...this.state.activities,newActivity
            ]
        } )
         console.log('add activity == ',newActivity);
    }

    render() {

        return (
            <div>
              
                <Nav title={'My Activity'} links={this.state.links}  />
                <div className="container main-wrap">
                     
                    <Header label={this.getHeader(this.props.location.pathname)} />
                    {
                        (this.props.location.pathname === "/") ?
                            <Home />
                        :
                        (this.props.location.pathname === "/add") ?
                            <AddActivity onNewActivity={this.addActivity} />
                            
                        :
                      
                        
                            <MyActivity 
                                filter={this.props.params.filter}
                                activities={this.state.activities}
                                total={this.countTotals(this.state.activities, 'progress')} />
                     

                    } 

                </div >
            </div>
        );
    }
};

