// Given information

let courseInfo = {
    id: 4000
    name: 'History 301'
}

let assignmentGroup = {
    id: 308
    name: 'KBA Exams'
    course_id: 4000
    Group Weight: 15
    assignments: [
        {
            id: 1
            name: 'The Thirteen Colonies'
            due_at: '2025-02-01'
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
    }
    {
        "learner_id": 56,
        "assignment_id": 2,
        "submission": {
            "submitted_at": '2025-03-10',
            "score": 135
        }
    }
    {
        "learner_id": 56,
        "assignment_id": 3,
        "submission": {
            "submitted_at": '',
            "score": 320
        }
    }
    {
        "learner_id": 67,
        "assignment_id": 1,
        "submission": {
            "submitted_at": '2025-02-01',
            "score": 187
        }
    }
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
let assignments = {}

for (let i = 0; i < assignmentGroup.length; i++)
    let group = assignmentGroup[i]
for (let j = 0; j < group.assignments.length; j++)
    let assignments = group.assignments[j]
let assignments = group.assignments[j]
if (typeof assignment.points_possible !== 'number' || assignments.points_possible <= 0){
    console.log('Point possible is not valid for assignment')
}

let learnersData = {} //opem object for data store
let currentDate = new Date() // will need regarding late submission or not due yet
let learner = learnersData[learner_id]
let {learner_id, assignment_id} = submission // extract
let assignment = assignment[assignments_id] // assignment lookup


for (let i = 0; i < learnerSubmission.length; i++){ // submission loop
    let submission = learnerSubmission[i]
}
let dueDate = new Date(assignment.due_at)
if(currentDate < dueDate){
    console.log('Not due yet')
}
let submissionTime = new Date(submission.submission_at) //check the submission time without penalty
let score = submission.submission.score
if (submissionTime > dueDate){
    score -= assignment.points_possible * 0.1
}
let percentage = score / assignment.points_possible // how to calculate percentaga
learner.assignments[assignment_id] = percentage
learner.totalPoints += assignment.points_possible
learner.totalWeightedPoints += score




    
