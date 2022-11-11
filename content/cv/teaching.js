const olin = "Franklin W. Olin College of Engineering";
const uw = "University of Washington";
const hcde = "Human Centered Design and Engineering";
const graduate_TA = "Graduate Teaching Assistant";
const ior = "Instructor of Record";
const ninja = "Ninja";

class Course {
  constructor(institution, courseName, time, position) {
    this.institution = institution;
    this.courseName = courseName;
    this.time = time;
    this.position = position;
  }
}

const teaching = [
  new Course(uw, "Web Technologies", "Wi23", ior),
  new Course(uw, "Interactive Systems Design and Technology", "Au22", ior),
  new Course(uw, "Data Programming", "Su22", graduate_TA),
  new Course(uw, "Interaction Design and Prototyping", "Sp22", graduate_TA),
  new Course(uw, "Web Technologies", "Wi22", graduate_TA),
  new Course(uw, "Computational Concepts in HCDE", "Wi20", graduate_TA),
  new Course(uw, "Advanced Physical Computing", "Sp19", graduate_TA),
  new Course(olin, "Software Design", "Sp18", ninja),
  new Course(olin, "Tell the Story of What you Make", "Sp18", ninja),
  new Course(olin, "Software Design", "Au17", ninja),
  new Course(olin, "User Experience Design", "Au17", ninja),
  new Course(olin, "Software Design", "Sp17", ninja),
  new Course(olin, "Software Design", "F16", ninja),
];
