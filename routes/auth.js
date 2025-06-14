const express = require('express');
const router = express.Router();


const studentProfiles = [
  {
    rollNo: "24E51A6701",
    name: "Aryan Sharma",
    branch: "Computer Science Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-03-10",
    religion: "Hindu",
    collegeEmail: "24E51A6701@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543210",
    address: "Hyderabad, Telangana",
    admissionDate: "2024-08-01",
    fathersName: "Rajesh Sharma",
    mothersName: "Priya Sharma",
    bloodGroup: "A+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6702",
    name: "Bhavya Singh",
    branch: "Electronics & Communication Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-07-22",
    religion: "Sikh",
    collegeEmail: "24E51A6702@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543211",
    address: "Secunderabad, Telangana",
    admissionDate: "2024-08-01",
    fathersName: "Sanjay Singh",
    mothersName: "Anita Singh",
    bloodGroup: "B-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6703",
    name: "Chirag Reddy",
    branch: "Mechanical Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-01-05",
    religion: "Hindu",
    collegeEmail: "24E51A6703@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543212",
    address: "Kukatpally, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Vijay Reddy",
    mothersName: "Sarala Reddy",
    bloodGroup: "O+",
    "nationality": "Indian"
  },
  {
    rollNo: "24E51A6704",
    name: "Divya Rao",
    branch: "Civil Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-09-18",
    religion: "Hindu",
    collegeEmail: "24E51A6704@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543213",
    address: "Gachibowli, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Murali Rao",
    mothersName: "Latha Rao",
    bloodGroup: "AB-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6705",
    name: "Eshan Khan",
    branch: "Information Technology",
    gender: "Male",
    semester: "1",
    dob: "2006-04-29",
    religion: "Muslim",
    collegeEmail: "24E51A6705@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543214",
    address: "Charminar, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Ahmed Khan",
    mothersName: "Fatima Khan",
    bloodGroup: "B+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6706",
    name: "Fiza Begum",
    branch: "Electrical & Electronics Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-12-01",
    religion: "Muslim",
    collegeEmail: "24E51A6706@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543215",
    address: "Malakpet, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Ibrahim Begum",
    mothersName: "Zainab Begum",
    bloodGroup: "A-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6707",
    name: "Gaurav Saini",
    branch: "Computer Science Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-02-14",
    religion: "Hindu",
    collegeEmail: "24E51A6707@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543216",
    address: "Jubilee Hills, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Dinesh Saini",
    mothersName: "Ritu Saini",
    bloodGroup: "O-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6708",
    name: "Hina Kumari",
    branch: "Electronics & Communication Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-08-25",
    religion: "Hindu",
    collegeEmail: "24E51A6708@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543217",
    address: "Banjara Hills, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Ramesh Kumar",
    mothersName: "Shanti Devi",
    bloodGroup: "A+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6709",
    name: "Ishaan Verma",
    branch: "Mechanical Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-05-03",
    religion: "Hindu",
    collegeEmail: "24E51A6709@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543218",
    address: "Nallagandla, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Sunil Verma",
    mothersName: "Seema Verma",
    bloodGroup: "B+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6710",
    name: "Jiya Paul",
    branch: "Civil Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-11-11",
    religion: "Christian",
    collegeEmail: "24E51A6710@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543219",
    address: "Madhapur, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Joseph Paul",
    mothersName: "Mary Paul",
    bloodGroup: "AB+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6711",
    name: "Kabir Das",
    branch: "Information Technology",
    gender: "Male",
    semester: "1",
    dob: "2006-06-07",
    religion: "Hindu",
    collegeEmail: "24E51A6711@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543220",
    address: "Manikonda, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Gopal Das",
    mothersName: "Radha Devi",
    bloodGroup: "A+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6712",
    name: "Lalita Devi",
    branch: "Electrical & Electronics Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-03-20",
    religion: "Hindu",
    collegeEmail: "24E51A6712@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543221",
    address: "Dilsukhnagar, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Ashok Kumar",
    mothersName: "Poonam Devi",
    bloodGroup: "O+",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6713",
    name: "Manoj Kumar",
    branch: "Computer Science Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-09-02",
    religion: "Hindu",
    collegeEmail: "24E51A6713@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543222",
    address: "Kothaguda, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Surendra Kumar",
    mothersName: "Shobha Devi",
    bloodGroup: "B-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6714",
    name: "Nisha Gupta",
    branch: "Electronics & Communication Engineering",
    gender: "Female",
    semester: "1",
    dob: "2006-07-07",
    religion: "Hindu",
    collegeEmail: "24E51A6714@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543223",
    address: "Miyapur, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Alok Gupta",
    mothersName: "Meena Gupta",
    bloodGroup: "A-",
    nationality: "Indian"
  },
  {
    rollNo: "24E51A6715",
    name: "Om Prakash",
    branch: "Mechanical Engineering",
    gender: "Male",
    semester: "1",
    dob: "2006-04-16",
    religion: "Hindu",
    collegeEmail: "24E51A6715@hitam.org",
    password: "hitam@123",
    contactNo: "+919876543224",
    address: "LB Nagar, Hyderabad",
    admissionDate: "2024-08-01",
    fathersName: "Ravi Prakash",
    mothersName: "Uma Devi",
    bloodGroup: "O-",
    nationality: "Indian"
  }
];
const facultyProfiles = [
  {
    employeeId: "20E51A6701",
    name: "Dr. Anjali Sharma",
    designation: "Professor",
    department: "Computer Science Engineering",
    gender: "Female",
    dob: "1975-03-15",
    religion: "Hindu",
    collegeEmail: "20E51A6701@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500001",
    address: "Hyderabad, Telangana",
    joiningDate: "2005-08-10",
    qualification: "Ph.D. in CSE",
    specialization: "Artificial Intelligence",
    experienceYears: 20
  },
  {
    employeeId: "20E51A6702",
    name: "Prof. Rajesh Kumar",
    designation: "Associate Professor",
    department: "Electronics & Communication Engineering",
    gender: "Male",
    dob: "1980-11-22",
    religion: "Hindu",
    collegeEmail: "20E51A6702@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500002",
    address: "Secunderabad, Telangana",
    joiningDate: "2010-07-01",
    qualification: "M.Tech in ECE",
    specialization: "VLSI Design",
    experienceYears: 15
  },
  {
    employeeId: "20E51A6703",
    name: "Ms. Priya Singh",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    gender: "Female",
    dob: "1985-03-10",
    religion: "Sikh",
    collegeEmail: "20E51A6703@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500003",
    address: "Kukatpally, Hyderabad",
    joiningDate: "2015-09-01",
    qualification: "M.E. in Mechanical Engineering",
    specialization: "Thermodynamics",
    experienceYears: 10
  },
  {
    employeeId: "20E51A6704",
    name: "Dr. Amit Verma",
    designation: "Professor",
    department: "Civil Engineering",
    gender: "Male",
    dob: "1978-09-01",
    religion: "Hindu",
    collegeEmail: "20E51A6704@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500004",
    address: "Gachibowli, Hyderabad",
    joiningDate: "2008-01-15",
    qualification: "Ph.D. in Civil Engineering",
    specialization: "Structural Engineering",
    experienceYears: 17
  },
  {
    employeeId: "20E51A6705",
    name: "Mr. Imran Khan",
    designation: "Assistant Professor",
    department: "Information Technology",
    gender: "Male",
    dob: "1988-04-29",
    religion: "Muslim",
    collegeEmail: "20E51A6705@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500005",
    address: "Charminar, Hyderabad",
    joiningDate: "2018-02-20",
    qualification: "M.Tech in IT",
    specialization: "Cyber Security",
    experienceYears: 7
  },
  {
    employeeId: "20E51A6706",
    name: "Dr. Fatima Begum",
    designation: "Associate Professor",
    department: "Electrical & Electronics Engineering",
    gender: "Female",
    dob: "1982-12-01",
    religion: "Muslim",
    collegeEmail: "20E51A6706@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500006",
    address: "Malakpet, Hyderabad",
    joiningDate: "2012-05-10",
    qualification: "Ph.D. in EEE",
    specialization: "Power Systems",
    experienceYears: 13
  },
  {
    employeeId: "20E51A6707",
    name: "Prof. Gaurav Gupta",
    designation: "Professor",
    department: "Computer Science Engineering",
    gender: "Male",
    dob: "1973-02-14",
    religion: "Hindu",
    collegeEmail: "20E51A6707@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500007",
    address: "Jubilee Hills, Hyderabad",
    joiningDate: "2003-09-01",
    qualification: "Ph.D. in CSE",
    specialization: "Data Science",
    experienceYears: 22
  },
  {
    employeeId: "20E51A6708",
    name: "Ms. Neha Yadav",
    designation: "Assistant Professor",
    department: "Electronics & Communication Engineering",
    gender: "Female",
    dob: "1990-08-25",
    religion: "Hindu",
    collegeEmail: "20E51A6708@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500008",
    address: "Banjara Hills, Hyderabad",
    joiningDate: "2020-07-15",
    qualification: "M.Tech in ECE",
    specialization: "Embedded Systems",
    experienceYears: 5
  },
  {
    employeeId: "20E51A6709",
    name: "Mr. Vishal Singh",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    gender: "Male",
    dob: "1987-05-03",
    religion: "Hindu",
    collegeEmail: "20E51A6709@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500009",
    address: "Nallagandla, Hyderabad",
    joiningDate: "2017-01-20",
    qualification: "M.E. in Mechanical Engineering",
    specialization: "Robotics",
    experienceYears: 8
  },
  {
    employeeId: "20E51A6710",
    name: "Dr. Susan George",
    designation: "Associate Professor",
    department: "Civil Engineering",
    gender: "Female",
    dob: "1979-11-11",
    religion: "Christian",
    collegeEmail: "20E51A6710@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500010",
    address: "Madhapur, Hyderabad",
    joiningDate: "2009-04-01",
    qualification: "Ph.D. in Civil Engineering",
    specialization: "Transportation Engineering",
    experienceYears: 16
  },
  {
    employeeId: "20E51A6711",
    name: "Mr. Siddharth Rao",
    designation: "Assistant Professor",
    department: "Information Technology",
    gender: "Male",
    dob: "1989-06-07",
    religion: "Hindu",
    collegeEmail: "20E51A6711@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500011",
    address: "Manikonda, Hyderabad",
    joiningDate: "2019-08-01",
    qualification: "M.Tech in IT",
    specialization: "Web Development",
    experienceYears: 6
  },
  {
    employeeId: "20E51A6712",
    name: "Prof. Lakshmi Devi",
    designation: "Professor",
    department: "Electrical & Electronics Engineering",
    gender: "Female",
    dob: "1970-03-20",
    religion: "Hindu",
    collegeEmail: "20E51A6712@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500012",
    address: "Dilsukhnagar, Hyderabad",
    joiningDate: "2000-01-01",
    qualification: "Ph.D. in EEE",
    specialization: "Renewable Energy",
    experienceYears: 25
  },
  {
    employeeId: "20E51A6713",
    name: "Mr. Pankaj Sharma",
    designation: "Assistant Professor",
    department: "Computer Science Engineering",
    gender: "Male",
    dob: "1992-09-02",
    religion: "Hindu",
    collegeEmail: "20E51A6713@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500013",
    address: "Kothaguda, Hyderabad",
    joiningDate: "2022-02-10",
    qualification: "M.Tech in CSE",
    specialization: "Cloud Computing",
    experienceYears: 3
  },
  {
    employeeId: "20E51A6714",
    name: "Dr. Ritu Agarwal",
    designation: "Associate Professor",
    department: "Electronics & Communication Engineering",
    gender: "Female",
    dob: "1984-07-07",
    religion: "Hindu",
    collegeEmail: "20E51A6714@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500014",
    address: "Miyapur, Hyderabad",
    joiningDate: "2014-06-01",
    qualification: "Ph.D. in ECE",
    specialization: "Digital Signal Processing",
    experienceYears: 11
  },
  {
    employeeId: "20E51A6715",
    name: "Mr. Alok Kumar",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    gender: "Male",
    dob: "1991-04-16",
    religion: "Hindu",
    collegeEmail: "20E51A6715@hitam.org", // Corrected email format
    password: "facultyPass123",
    contactNo: "+919876500015",
    address: "LB Nagar, Hyderabad",
    joiningDate: "2021-03-01",
    qualification: "M.Tech in Mechanical Engineering",
    specialization: "CAD/CAM",
    experienceYears: 4
  }
];
 

router.post('/login', (req, res) => {
  const { role, collegeEmail, password } = req.body;

  if (!role || !collegeEmail || !password) {
    return res.status(400).json({
      success: false,
      message: 'Missing role, email, or password.'
    });
  }

  const normalizedRole = role.toLowerCase();
  const normalizedEmail = collegeEmail.toLowerCase();

  let user;

  switch (normalizedRole) {
    case 'student':
      user = studentProfiles.find(
        (u) => u.collegeEmail.toLowerCase() === normalizedEmail && u.password === password
      );
      break;
    case 'faculty':
      user = facultyProfiles.find(
        (u) => u.collegeEmail.toLowerCase() === normalizedEmail && u.password === password
      );
      break;
    default:
      return res.status(400).json({
        success: false,
        message: 'Invalid role provided.'
      });
  }

  if (user) {
    res.json({
      success: true,
      message: 'Login successful!',
      user: { ...user, password: undefined } // Don't send password back
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials.'
    });
  }
});

module.exports = router;
