import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image, Button, Form, Icon, Grid } from "semantic-ui-react";
import "../pages/Landing_pages.css";
import logo from "../assert/logo.png";
const Landing_pages = () => {
  const [minutes, SetMinutes] = useState(0);
  const [seconds, SetSeconds] = useState(0);
  const [question, setQuestionNumber] = useState(1);
  var Time;
  useEffect(() => {
    Time = setInterval(() => {
      SetSeconds(seconds + 1);
      if (seconds == 60) {
        SetMinutes(minutes + 1);
        SetSeconds(0);
      }
    }, 1000);
    return () => clearInterval(Time);
  });

  return (
    <>
      <div className="main_body">
        <div className="TopBar">
          <div className="company_con">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="user_con">
            <div>
              <h2>Seenivasan T</h2>
            </div>
            <div>
              <h4>Vaanam Technologies - Online Test 2023</h4>
              
            </div>
          </div>
          <div className="timer_con">
            <div>
              <div>
                <h2>0</h2>
              </div>
              <div>
                <h4>hours</h4>
              </div>
            </div>
            <div>
              <div>
                <h2>{minutes}</h2>
              </div>
              <div>
                <h4>minutes</h4>
              </div>
            </div>
            <div>
              <div>
                <h2>{seconds}</h2>
              </div>
              <div>
                <h4>seconds</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="question_show">
        
          <div className="qestion_no">
            {question == 1 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>1</div>
            ) : question > 1 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>1</div>
            ) : (
              <div>1</div>
            )}
            {question == 2 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>2</div>
            ) : question > 2 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>2</div>
            ) : (
              <div>2</div>
            )}
            {question == 3 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>3</div>
            ) : question > 3 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>3</div>
            ) : (
              <div>3</div>
            )}
            {question == 4 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>4</div>
            ) : question > 4 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>4</div>
            ) : (
              <div>4</div>
            )}
            {question == 5 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>5</div>
            ) : question > 5 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>5</div>
            ) : (
              <div>5</div>
            )}
            {question == 6 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>6</div>
            ) : question > 6 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>6</div>
            ) : (
              <div>6</div>
            )}
            {question == 7 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>7</div>
            ) : question > 7 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>1</div>
            ) : (
              <div>7</div>
            )}
            {question == 8 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>8</div>
            ) : question > 8 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>8</div>
            ) : (
              <div>8</div>
            )}
            {question == 9 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>9</div>
            ) : question > 9 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>9</div>
            ) : (
              <div>9</div>
            )}
            {question == 10 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>10</div>
            ) : question > 10 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>10</div>
            ) : (
              <div>10</div>
            )}
            {question == 11 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>11</div>
            ) : question > 11 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>11</div>
            ) : (
              <div>11</div>
            )}
            {question == 12 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>12</div>
            ) : question > 12 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>12</div>
            ) : (
              <div>12</div>
            )}
            {question == 13 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>13</div>
            ) : question > 13 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>13</div>
            ) : (
              <div>13</div>
            )}
            {question == 14 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>14</div>
            ) : question > 14 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>14</div>
            ) : (
              <div>14</div>
            )}
            {question == 15 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>15</div>
            ) : question > 15 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>15</div>
            ) : (
              <div>15</div>
            )}
            {question == 16 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>16</div>
            ) : question > 16 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>16</div>
            ) : (
              <div>16</div>
            )}
            {question == 17 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>17</div>
            ) : question > 17 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>17</div>
            ) : (
              <div>17</div>
            )}
            {question == 18 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>18</div>
            ) : question > 18 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>18</div>
            ) : (
              <div>18</div>
            )}
            {question == 19 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>19</div>
            ) : question > 19 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>19</div>
            ) : (
              <div>19</div>
            )}
            {question == 20 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>20</div>
            ) : question > 20 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>20</div>
            ) : (
              <div>20</div>
            )}
            {question == 21 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>21</div>
            ) : question > 21 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>21</div>
            ) : (
              <div>21</div>
            )}
            {question == 22 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>22</div>
            ) : question > 22 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>22</div>
            ) : (
              <div>22</div>
            )}
            {question == 23 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>23</div>
            ) : question > 23 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>23</div>
            ) : (
              <div>23</div>
            )}
            {question == 24 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>24</div>
            ) : question > 24 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>24</div>
            ) : (
              <div>24</div>
            )}
            {question == 25 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>25</div>
            ) : question > 25 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>25</div>
            ) : (
              <div>25</div>
            )}
            {question == 26 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>26</div>
            ) : question > 26 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>26</div>
            ) : (
              <div>26</div>
            )}
            {question == 27 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>27</div>
            ) : question > 27 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>27</div>
            ) : (
              <div>27</div>
            )}
            {question == 28 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>28</div>
            ) : question > 28 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>28</div>
            ) : (
              <div>28</div>
            )}
            {question == 29 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>29</div>
            ) : question > 29 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>29</div>
            ) : (
              <div>29</div>
            )}
            {question == 30 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>30</div>
            ) : question > 30 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>30</div>
            ) : (
              <div>30</div>
            )}
            {question == 31 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>31</div>
            ) : question > 31 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>31</div>
            ) : (
              <div>31</div>
            )}
            {question == 32 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>32</div>
            ) : question > 32 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>32</div>
            ) : (
              <div>32</div>
            )}
            {question == 33 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>33</div>
            ) : question > 33 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>33</div>
            ) : (
              <div>33</div>
            )}
            {question == 34 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>34</div>
            ) : question > 34 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>34</div>
            ) : (
              <div>34</div>
            )}
            {question == 35 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>35</div>
            ) : question > 35 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>35</div>
            ) : (
              <div>35</div>
            )}
            {question == 36 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>36</div>
            ) : question > 36 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>36</div>
            ) : (
              <div>36</div>
            )}
            {question == 37 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>37</div>
            ) : question > 37 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>37</div>
            ) : (
              <div>37</div>
            )}
            {question == 38 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>38</div>
            ) : question > 38 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>38</div>
            ) : (
              <div>38</div>
            )}
            {question == 39 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>39</div>
            ) : question > 39 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>39</div>
            ) : (
              <div>39</div>
            )}
            {question == 40 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>40</div>
            ) : question > 40 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>40</div>
            ) : (
              <div>40</div>
            )}
            {question == 41 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>41</div>
            ) : question > 41 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>41</div>
            ) : (
              <div>41</div>
            )}
            {question == 42 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>42</div>
            ) : question > 42 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>42</div>
            ) : (
              <div>42</div>
            )}
            {question == 43 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>43</div>
            ) : question > 43 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>43</div>
            ) : (
              <div>43</div>
            )}
            {question == 44 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>44</div>
            ) : question > 44 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>44</div>
            ) : (
              <div>44</div>
            )}
            {question == 45 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>45</div>
            ) : question > 45 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>45</div>
            ) : (
              <div>45</div>
            )}
            {question == 46 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>46</div>
            ) : question > 46 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>46</div>
            ) : (
              <div>46</div>
            )}
            {question == 47 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>47</div>
            ) : question > 47 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>47</div>
            ) : (
              <div>47</div>
            )}
            {question == 48 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>48</div>
            ) : question > 48 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>48</div>
            ) : (
              <div>48</div>
            )}
            {question == 49 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>49</div>
            ) : question > 49 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>49</div>
            ) : (
              <div>49</div>
            )}
            {question == 50 ? (
              <div style={{ backgroundImage: "linear-gradient(to bottom, grey, #4fcb8d)", width: "80%",height:"3.8%" }}>50</div>
            ) : question > 50 ? (
              <div style={{ backgroundColor: "#4fcb8d", width: "7.2%",color:"white" }}>50</div>
            ) : (
              <div>50</div>
            )}
          </div>
          {question == 1 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 1/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A can lay railway track between two given stations in 16 days
                  and B can do the same job in 12 days. With help of C, they did
                  the job in 4 days only. Then, C alone can do the job in
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="12 days"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="18 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  {/* <Button primary size="tiny" id="prvbttn">
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button> */}
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder1">
                      <div class="bar-31" style={{ width: "0%" }}>
                        0%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {question == 4 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 4/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Verbal</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  There are not many men who are so famous that they are
                  frequently referred to by their short names only
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                          initials"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="signatures"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="pictures"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="
                          middle names"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "11%" }}>
                        3%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 3 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 3/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">QAR, RAS, SAT, TAU, _____</div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            UAV"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="UAT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="TAS"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="TAT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "11%" }}>
                        2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 2 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 2/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A father said to his son, "I was as old as you are at the
                  present at the time of your birth". If the father's age is 38
                  years now, the son's age five years back was:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            14 years"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="19 years"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="33 years"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="36 years"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "4%" }}>
                        1%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 5 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 5/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Look at this series: 7, 10, 8, 11, 9, 12, ... What number
                  should come next?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="12"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="13"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "15%" }}>
                        4%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 6 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 6/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A is two years older than B who is twice as old as C. If the
                  total of the ages of A, B and C be 27, then how old is B?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="9"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "18%" }}>
                        5%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 7 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 7/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Verbal</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Fate smiles ...... those who untiringly grapple with stark
                  realities of life.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            with"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="over"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="on"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="round"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "18%" }}>
                        6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 8 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 8/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Present ages of Sameer and Anand are in the ratio of 5 : 4
                  respectively. Three years hence, the ratio of their ages will
                  become 11 : 9 respectively. What is Anand's present age in
                  years?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            24"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="27"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="40"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="Cannot be determined"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "19%" }}>
                        7%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 9 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 9/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Look at this series: 53, 53, 40, 40, 27, 27, ... What number
                  should come next?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            12"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="14"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="27"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="53"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "19%" }}>
                        9%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 10 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 10/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A is two years older than B who is twice as old as C. If the
                  total of the ages of A, B and C be 27, then how old is B?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="9"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "20%" }}>
                        10%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 11 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 11/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Verbal</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Catching the earlier train will give us the ...... to do some
                  shopping.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="chance"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="luck"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="possibility"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="occasion"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "22%" }}>
                        11%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 12 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 12/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which SQL constraint do we use to set some value to a field
                  whose value has not been added explicitly?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="UNIQUE"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="NOT NULL"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DEFAULT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="CHECK"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "24%" }}>
                        12%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 13 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 13/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  If a clock, set at 04:00 on 5th Feb 1772, gains 5 seconds
                  every hour, What will be the angle(in degrees) in the middle
                  of minute and the hour hand on 2nd March 1772 if the actual
                  time is 4 PM.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="155"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="156"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="157"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="147"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "26%" }}>
                        13%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 14 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 14/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Arrange the words given below in a meaningful sequence. 1.
                  Numbering 2. Margins 3. Indentation 4. Paper 5. Spacing 6.
                  Title
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="1,2,3,6,4,5"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="2,4,6,1,5,3"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="3,5,2,1,4,6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="1,2,3,4,5,6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "28%" }}>
                        13%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 15 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 15/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Statement: "BSA Cycles - Fast, easy to ride, inspiring,
                  consistent, crafted and up-to-date automation." - An
                  advertisement.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="showing"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Saver"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="inspiring"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="consistent"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "28%" }}>
                        14%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 16 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 16/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A father said to his son, "I was as old as you are at the
                  present at the time of your birth". If the father's age is 38
                  years now, the son's age five years back was:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="14 days"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="17 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="19 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "28%" }}>
                        15%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 17 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 17/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which of the following are TCL commands?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="COMMIT and ROLLBACK"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="UPDATE and TRUNCATE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="SELECT and INSERT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="GRANT and REVOKE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "32%" }}>
                        16%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 18 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 18/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which statement is used to delete all rows in a table without
                  having the action logged?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DELETE"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="REMOVE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DROP"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="TRUNCAT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "34%" }}>
                        17%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 19 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 19/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  In which numbering system can the binary number
                  1011011111000101 be easily converted to?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            Decimal system"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Hexadecimal system
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Octal system"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="
                            No need to convert"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "36%" }}>
                        18%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 20 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 20/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which bitwise operator is suitable for turning off a
                  particular bit in a number?{" "}
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            && operator"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="& operator
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="|| operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="! operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "37%" }}>
                        19%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 21 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 21/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A fruit seller had some apples. He sells 40% apples and still
                  has 420 apples. Originally, he had:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            
588 apples"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            600 apples
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            673 apples"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="700"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "38%" }}>
                        20%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 22 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 22/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Two numbers A and B are such that the sum of 5% of A and 4% of
                  B is two-third of the sum of 6% of A and 8% of B. Find the
                  ratio of A : B.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            2:3"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="4:7
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="5:8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="4:6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "40%" }}>
                        21%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 23 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 23/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which bitwise operator is suitable for checking whether a
                  particular bit is on or off?{" "}
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="&& operator"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            & operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            || operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="| operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "42%" }}>
                        22%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 24 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 24/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Three candidates contested an election and received 1136, 7636
                  and 11628 votes respectively. What percentage of the total
                  votes did the winning candidate get?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="57%"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            65%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            67%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="94%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "46%" }}>
                        23%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 25 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 25/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  The population of a town increased from 1,75,000 to 2,62,500
                  in a decade. The average percent increase of population per
                  year is:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="4.57%"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            5%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            6%%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="8.57%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "28%" }}>
                        24%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}






{question ==26 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question26/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Look at this series: 7, 10, 8, 11, 9, 12, ... What number
                  should come next?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="12"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="13"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "26%" }}>
                      25%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 27 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 27/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A is two years older than B who is twice as old as C. If the
                  total of the ages of A, B and C be 27, then how old is B?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="9"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "49%" }}>
                        26%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 28 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 28/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Verbal</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Fate smiles ...... those who untiringly grapple with stark
                  realities of life.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            with"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="over"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="on"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="round"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "50%" }}>
                        27%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 29 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 29/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Present ages of Sameer and Anand are in the ratio of 5 : 4
                  respectively. Three years hence, the ratio of their ages will
                  become 11 : 9 respectively. What is Anand's present age in
                  years?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            24"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="27"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="40"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="Cannot be determined"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "50%" }}>
                        28%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 30 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 30/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Look at this series: 53, 53, 40, 40, 27, 27, ... What number
                  should come next?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            12"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="14"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="27"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="53"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "51%" }}>
                        29%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 31 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 31/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A is two years older than B who is twice as old as C. If the
                  total of the ages of A, B and C be 27, then how old is B?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            7"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="9"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="10"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "51%" }}>
                        30%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 32 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 32/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Verbal</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Catching the earlier train will give us the ...... to do some
                  shopping.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="chance"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="luck"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="possibility"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="occasion"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "52%" }}>
                        31%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 45 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 45/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which SQL constraint do we use to set some value to a field
                  whose value has not been added explicitly?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="UNIQUE"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="NOT NULL"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DEFAULT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="CHECK"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "54%" }}>
                        32%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 33 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 33/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  If a clock, set at 04:00 on 5th Feb 1772, gains 5 seconds
                  every hour, What will be the angle(in degrees) in the middle
                  of minute and the hour hand on 2nd March 1772 if the actual
                  time is 4 PM.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="155"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="156"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="157"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="147"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "56%" }}>
                        32%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 34 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 34/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Arrange the words given below in a meaningful sequence. 1.
                  Numbering 2. Margins 3. Indentation 4. Paper 5. Spacing 6.
                  Title
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="1,2,3,6,4,5"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="2,4,6,1,5,3"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="3,5,2,1,4,6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="1,2,3,4,5,6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "59%" }}>
                        33%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 35 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 35/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Statement: "BSA Cycles - Fast, easy to ride, inspiring,
                  consistent, crafted and up-to-date automation." - An
                  advertisement.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="showing"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Saver"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="inspiring"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="consistent"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "62%" }}>
                        35%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 36 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 36/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A father said to his son, "I was as old as you are at the
                  present at the time of your birth". If the father's age is 38
                  years now, the son's age five years back was:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="14 days"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="17 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="19 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "64%" }}>
                        35%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 46 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 46/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which of the following are TCL commands?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="COMMIT and ROLLBACK"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="UPDATE and TRUNCATE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="SELECT and INSERT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="GRANT and REVOKE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "84%" }}>
                        45%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 37 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 37/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Sql</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which statement is used to delete all rows in a table without
                  having the action logged?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DELETE"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="REMOVE"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="DROP"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="TRUNCAT"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "69%" }}>
                        36%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 38 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 38/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  In which numbering system can the binary number
                  1011011111000101 be easily converted to?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            Decimal system"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Hexadecimal system
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="Octal system"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="
                            No need to convert"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "70%" }}>
                        37%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 39 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 39/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which bitwise operator is suitable for turning off a
                  particular bit in a number?{" "}
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            && operator"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="& operator
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="|| operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="! operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "73%" }}>
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 40 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 40/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A fruit seller had some apples. He sells 40% apples and still
                  has 420 apples. Originally, he had:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            
588 apples"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            600 apples
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            673 apples"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="700"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "74%" }}>
                        39%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 41 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 41/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Two numbers A and B are such that the sum of 5% of A and 4% of
                  B is two-third of the sum of 6% of A and 8% of B. Find the
                  ratio of A : B.
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            2:3"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="4:7
                            "
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="5:8"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="4:6"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "75%" }}>
                        40%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 42 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 42/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Programming</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Which bitwise operator is suitable for checking whether a
                  particular bit is on or off?{" "}
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="&& operator"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            & operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            || operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="| operator"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "78%" }}>
                        45%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 43 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 43/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  Three candidates contested an election and received 1136, 7636
                  and 11628 votes respectively. What percentage of the total
                  votes did the winning candidate get?
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="57%"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            65%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            67%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="94%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "83%" }}>
                        45%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
            {question == 44 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 44/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  A can lay railway track between two given stations in 16 days
                  and B can do the same job in 12 days. With help of C, they did
                  the job in 4 days only. Then, C alone can do the job in
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="12 days"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="15 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="18 days"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button primary size="tiny" id="prvbttn" onClick={() => setQuestionNumber(question - 1)}>
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question + 1)}
                  >
                    <span className="Button_text">Next</span>
                    {" >>"}
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "82%" }}>
                        43%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {question == 47 ? (
            <div className="questions_div">
              <div className="question_title_main_div">
                <div className="question_number">
                  <h2>Question 50/50</h2>
                </div>
                <div className="question_type">
                  <h4>Section: Aptitude</h4>
                </div>
              </div>

              <div className="question_main_con">
                <div className="question_s">
                  The population of a town increased from 1,75,000 to 2,62,500
                  in a decade. The average percent increase of population per
                  year is:
                </div>
                <Form size="tiny">
                  <div className="option_select">
                    <Form.Group grouped size="small">
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="4.57%"
                            control="input"
                            type="radio"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            5%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            label="
                            6%%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                      <div className="option_bar">
                        <div>
                          <Form.Field
                            id="answ"
                            label="8.57%"
                            control="input"
                            type="radio"
                            name="htmlRadios"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <div className="Other_data">
                <div className="inside_data">
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => setQuestionNumber(question - 1)}
                  >
                    {"<< "}
                    <span className="Button_text">Prev</span>
                  </Button>
                  <Button
                    primary
                    size="tiny"
                    id="prvbttn"
                    onClick={() => window.location.href="http://vtspeedtestuat.vaanamtechdemo.com/canditate"}
                  >
                    <span className="Button_text">Submit</span>
                
                  </Button>
                </div>

                <div className="process_bar">
                  <div>
                    <div class="bar-holder">
                      <div class="bar-3" style={{ width: "98%" }}>
                        99%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report_bttn_con">
                  <Button icon size="mini" id="bttn">
                    <Icon name="eraser" size="large" color="black" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" color="red" size="large" />
                  </Button>
                  <Button icon size="mini" id="bttn">
                    <Icon name="flag" size="large" color="green" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default Landing_pages;
