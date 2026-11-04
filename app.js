
/*
Name: Your Full Name
Department: Information Science and Engineering
*/

var app = angular.module("myApp", []);

// Parent Controller
app.controller("CollegeController", function($scope) {

    $scope.collegeName = "Maharaja Institute of Technology, Mysore";

});

// Child Controller
app.controller("StudentController", function($scope) {

    // Empty student list initially
    $scope.students = [];

    // Hide details initially
    $scope.showDetails = false;

    // Add Student
    $scope.addStudent = function() {

        if ($scope.name && $scope.name.trim() !== "") {

            $scope.students.push($scope.name);

            // Clear name input
            $scope.name = "";

        } else {

            alert("Please enter student name");

        }

    };

});

