import { Col, Row, Card, Spinner, Button, Container } from 'react-bootstrap';
import { useEffect, useState, useContext} from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import axios from 'axios';
import { LoginContext } from '../controller/loginstate';

const url = 'http://localhost:5000/api';

const Home = () => {
    
    var [ questiondata, setQuestiondata ] = useState([]);

    const {account, setAccount} = useContext(LoginContext);

    const questionSaver = async () => {
        try {
            await axios.get(`${url}/question/search`)
            .then ((res) => {
                console.log(res.data);
                setQuestiondata(questiondata => ([...questiondata, res.data]));
            })
        }catch(err) {
            console.log('Error while finding User',err);
        }
    }

    useEffect(() => {
        questionSaver();
    }, [])

    console.log(questiondata[0]);

    return (
        <div>
        {
            <div>
            {
                <Row xs={1} md={2} className="g-4" style={{margin: '3% 3%'}}>
                {
                    (questiondata[0] === undefined)?
                        <div></div>:
                        questiondata[0].map((question, index) => (
                            <Col className = "mb-3">
                                <Card border="success" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: '#ffffff', borderWidth: '2px'}}>
                                    <Card.Body> 
                                        <Card.Title><FaRegQuestionCircle className="mb-2"/> {question.title}</Card.Title>
                                        <Card.Text>
                                            <span style={{color:'#5cb85c'}}>Question: </span>{question.content}
                                            <br/>
                                            <span style={{color:'#FFFF00'}}>By: {question.usernameQ}</span>
                                        </Card.Text>
                                        <div className="d-flex justify-content-around">
                                            <Button variant="outline-success">
                                                See Answers
                                            </Button>
                                            <Button variant="success">
                                                Add Answer
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                }
                </Row>
            }
            </div>
        }
        </div>
    )
}


export default Home;