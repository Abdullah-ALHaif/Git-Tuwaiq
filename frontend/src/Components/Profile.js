import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(() => false);
  const [btnText, setBtnText] = useState(() => "Edit");

  const handleBtn = () => {
    if (!isEdit) {
        setBtnText(prev => prev = "Save")
        setIsEdit(prev => prev = !prev)
    }else{
        setBtnText(prev => prev = "Edit")
        setIsEdit(prev => prev = !prev)
    }
  };
  return (
    <div className="row">
      <div className="col-3">
        <center>
          <Image
          style={{border:"0.5px solid",marginTop:"10px",marginBottom:"10px",borderRadius:"100%",boxShadow:"3px 4px 7px #000052" }}
            width="170"
            height="160"
            src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif"
            
          />
          <br />
          <Button
            onClick={() => handleBtn()}
            style={{ width: 200 }}
            variant="dark"
          >
            {" "}
            {btnText}{" "}
          </Button>
        </center>
      </div>
{isEdit?
    <div className="col-9">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="username" className="form-label">
              User Name:
            </label>
            <input
            
              type="text"
              className="form-control"
              id="username"
              placeholder="Mansovic"
            />
          </div>
          <div className="col-md-6">
            <label for="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Mansour"
            />
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Mansovic"
            />
          </div>
          <div className="col-md-6">
            <label for="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="col-md-12">
            <label for="joindate" className="form-label">
              Join Date:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Join Date"
            />
          </div>
        </form>
      </div>
      :
      <div className="col-9">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="username" className="form-label">
              User Name:
            </label>
            <input
            disabled
              type="text"
              className="form-control"
              id="username"
              placeholder="Mansovic"
            />
          </div>
          <div className="col-md-6">
            <label for="name" className="form-label">
              Name:
            </label>
            <input
            disabled
              type="text"
              className="form-control"
              id="name"
              placeholder="Mansour"
            />
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">
              Email:
            </label>
            <input
            disabled
              type="email"
              className="form-control"
              id="email"
              placeholder="Mansovic"
            />
          </div>
          <div className="col-md-6">
            <label for="password" className="form-label">
              Password:
            </label>
            <input
            disabled
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="col-md-12">
            <label for="joindate" className="form-label">
              Join Date:
            </label>
            <input
            disabled 
              type="text"
              className="form-control"
              placeholder="Join Date"
            />
          </div>
        </form>
      </div>}

    
    </div>
  );
};

export default Profile;