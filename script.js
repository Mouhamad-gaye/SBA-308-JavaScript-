// Given information

let courseInfo = {
    id: 4000,
    name: 'History 301'
}

let assignmentGroup = {
    id: 308,
    name: 'KBA Exams',
    course_id: 4000,
    GroupWeight: 15,
    assignments: [
        {
            id: 1,
            name: 'The Thirteen Colonies',
            due_at: '2025-02-01',
            points_possible: 200
        },
        {
            id: 2,
            name: 'The American Revolution',
            due_at: "2025-03-12",
            points_possible: 200
        },
        {
            id: 3,
            name: 'The Early Republic',
            due_at: "2025-11-02",
            points_possible: 350
        }
    ]

}

//Learner Submission

let learnerSubmission = [
    {
        "learner_id": 56,
        "assignment_id": 1,
        "submission": {
            "submitted_at": '2025-01-30',
            "score": 152
        }
    },
    {
        "learner_id": 56,
        "assignment_id": 2,
        "submission": {
            "submitted_at": '2025-03-10',
            "score": 135
        }
    },
    {
        "learner_id": 56,
        "assignment_id": 3,
        "submission": {
            "submitted_at": '',
            "score": 320
        }
    },
    {
        "learner_id": 67,
        "assignment_id": 1,
        "submission": {
            "submitted_at": '2025-02-01',
            "score": 187
        }
    },
    {
        "learner_id": 67,
        "assignment_id": 2,
        "submission": {
            "submitted_at": '2025-03-25',
            "score": 127
        }
    }
]

// Validating assignment group.

for (let i = 0; i < assignmentGroup.length; i++) {
    let group = assignmentGroup[i]
    if (group.course_id !== courseInfo.id) {
        throw new Error('Assignment Group ${group.id} do not match ${courseInfo.id}')
    }
}

// For assignment group / assignments
let assignment2 = {}

for (let i = 0; i < assignmentGroup.length; i++)
    for (let j = 0; j < group.assignments.length; j++)
if (typeof assignment2.points_possible !== 'number' || assignment2.points_possible <= 0){
    console.log('Point possible is not valid for assignment')
}

//Learners Data

// let learnersData = {} //opem object for data store
// for (let i = 0; i < learnerSubmission.length; i++){ // submission loop
//     let assignment = assignment.assignment[i]
// }

let currentDate = new Date() // will need regarding late submission or not due yet
let dueDate = new Date(assignment2.due_at)
if(currentDate < dueDate){
    console.log('Not due yet')
}
let LearnerData = {}
let learner_id = learnerSubmission
if(!LearnerData[learner_id]){
    LearnerData[learner_id] = {id: learner_id, assignment: {}, totalPoints: 0,totalWeightedPoints: 0}
}
let submission = {learner_id, assignment2}
let learner = getLearnerData[learner_id]
let submissionTime = new Date(submission.submitted_at) //check the submission time without penalty
let score = submission.score
if (submissionTime > dueDate){
    score -= assignment2.points_possible * 0.1
}
let percentage = score / assignment.points_possible // how to calculate percentaga
learner.assignments[assignment] = percentage
learner.totalPoints += assignment.points_possible
learner.totalWeightedPoints += score

function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
    
    let result = [
      {
        id: 56,
        avg: 1.0, // (152 + 200) / (135 + 200)
        1: 0.76, // 152 / 200
        2: .67 // 135 / 200
      },
      {
        id: 67,
        avg: 1.1, // (187 + 200) / (127 + 200)
        1: 0.93, // 187 / 200
        2: 0.57 // late: (127 - 13) / 200
      }
    ];
  
    return result;
  }
  
  let result = getLearnerData(courseInfo, assignmentGroup, learnerSubmission);
  
  console.log(result);




    
