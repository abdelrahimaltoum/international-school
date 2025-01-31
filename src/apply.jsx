import { Button } from "@mui/material";
import "./apply.css";
import { Link } from "react-router-dom";

function Apply(){
    return(
        <div className="apply">
            <div className="apply-upper">
                <div className="apply-upper-left">
              <Link to="/">      <img src="https://gis-cairo.net/wp-content/uploads/2023/12/GISC2.png"/></Link>
                </div>
               
                <div className="apply-upper-right">
                    <h3 className="welcome-to">Welcome to</h3>
                    <h2>GEMS International School Cairo</h2>
            </div> 
            </div>
                    <div className="apply-lower">
                    <div className="apply-form">
                         <form>
                            <h2>Register your child</h2>
                          <div className="form-row"> 
                          <div className="form-item"> 
                               <label>Parent Name</label>
                           <input type="text"/></div>
                            <div className="form-item">
                            <label>Phone</label>
                            <input type="text"/>
                            </div>
                            </div>
                            <div className="form-row">  
                            <div className="form-item"><label>Email</label>
                            <input type="email"/></div> 
                            <div className="form-item">
                            <label>Residence Area</label>
                            <select>
                                <option></option>
                                <option>Rehab</option>
                                <option>New Cairo</option>
                                <option>Nasr City</option>
                                <option>Madinaty</option>
                                <option>Other</option>
                            </select>
                            </div> 
                            </div>
                            <div className="form-row">
                            <div className="form-item">
                            <label>Student Name</label>
                            <input type="text"/></div>
                            <div className="form-item">

                            <label>Gender</label>
                            <select>
                            <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </select></div>
                            </div>
                           
                            <div className="form-row">
                            
                            
                            <h3>Student Date of Birth</h3></div>
                            <div className="form-row">
                           <div className="form-item"> <label>Day</label>
                            <select>
                            <option></option>
                            <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select></div>
                            <div className="form-item">
                            <label>Month</label>
                            <select>
                            <option></option>
                            <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                                
                            </select></div>
                            <div className="form-item">
                            <label>Year</label>
                            <select>
                            <option></option>
                            <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                                <option>2008</option>
                                <option>2009</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </select></div></div>
                            <div className="form-row">
                            <div className="grade">
                            <label>Grade applying for</label>
                            <select>
                            <option></option>
                            <option>Preschool</option>
                            <option>KG1</option>
                            <option>KG2</option>
                            <option>G1</option>
                            <option>G2</option>
                            <option>G3</option>
                            <option>G4</option>
                            <option>G5</option>
                            <option>G6</option>
                            <option>G7</option>
                            <option>G8</option>
                            <option>G9</option>
                            </select></div></div>
                            <div className="form-row"> <Button>submit</Button></div>
                        </form>
                    </div>
                       
                    </div>
                </div>
           
    )
}
export default Apply;