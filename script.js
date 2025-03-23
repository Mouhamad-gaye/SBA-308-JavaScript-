// Given information

let courseInfo = {
    id: 4000
    Coursename: 'History 301'
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