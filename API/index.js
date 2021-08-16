const express = require("express");
const router = new express.Router();
const StudentDatas = require("../Database/Models/index");

/*
Route           /student
Description     add student data
Access          PUBLIC
Parameter       NONE
Methods         post
*/
router.post("/student", async (req, res) => {
  try {
    const addstud = new StudentDatas(req.body);
    const studsave = await addstud.save();
    res.send(studsave);
  } catch (e) {
    res.send(e);
  }
});

/*
Route           /student
Description     get students data
Access          PUBLIC
Parameter       NONE
Methods         get
*/
try {
  router.get("/student", async (req, res) => {
    const allStudents = await StudentDatas.find({}).sort({ rollNo: 1 });
    return res.send(allStudents);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /student/
Description     get student data using rollno
Access          PUBLIC
Parameter       :rollNo
Methods         get
*/
try {
  router.get("/student/:rollNo", async (req, res) => {
    const specdata = await StudentDatas.findOne({ rollNo: req.params.rollNo });
    if (!specdata) {
      return res.send(`no student found at rollno ${req.params.rollNo}`);
    }
    return res.send(specdata);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /student/
Description     update student name using rollno
Access          PUBLIC
Parameter       :rollNo
Methods         put
*/
try {
  router.put("/student/update/:rollno", async (req, res) => {
    const updatestud = await StudentDatas.findOneAndUpdate(
      {
        rollNo: req.params.rollno,
      },
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );
    return res.send(updatestud);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /student/update/contactnumber
Description     add new contact number 
Access          PUBLIC
Parameter       :rollNo
Methods         put
*/
try {
  router.put("/student/update/contactnumber/:rollno", async (req, res) => {
    const updatenum = await StudentDatas.findOneAndUpdate(
      {
        rollNo: req.params.rollno,
      },
      {
        contactNumber: req.body.contactNumber,
      },
      {
        new: true,
      }
    );
    return res.send(updatenum);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /student/delete/
Description     delete a student
Access          PUBLIC
Parameter       :rollNo
Methods         delete
*/
try {
  router.delete("/student/delete/:rollno", async (req, res) => {
    const deleteStud = await StudentDatas.findOneAndDelete({
      rollNo: req.params.rollno,
    });
    res.send(deleteStud);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /student/delete/conatctnumber/
Description     delete a contactnumber 
Access          PUBLIC
Parameter       :rollNo
Methods         delete
*/
router.delete(
  "/student/delete/conatctnumber/:rollno/:contactnumber",
  async (req, res) => {
    try {
      const deleteNum = await StudentDatas.findOneAndDelete(
        {
          rollNo: req.params.rollno,
        },
        {
          $pull: {
            contactNumber: req.params.contactnumber,
          },
        },
        {
          new: true,
        }
      );
    } catch (e) {
      res.send(e);
    }
  }
);

module.exports = router;
