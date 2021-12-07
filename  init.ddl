CREATE TABLE classes (
		id VARCHAR(50),
		title VARCHAR(500) not null,
		semester VARCHAR(300) not null,
		year INT not null,
		credits int not null,
		PRIMARY KEY(course_id)
	);


INSERT INTO classes VALUES('CIS487', 'Network Security', 'Fall', '2021', '3');

INSERT INTO classes VALUES('CS232', 'Data Structures', 'Fall', '2021', '3');

INSERT INTO classes VALUES('CS232L', 'Data Structures Lab', 'Fall', '2021', '1');

INSERT INTO classes VALUES('CS256', 'Database Management Systems', 'Fall', '2021', '3');

INSERT INTO classes VALUES('CS256L', 'Database Management Systems Lab', 'Fall', '2021', '1');

INSERT INTO classes VALUES('MATH235', 'Discrete Mathematics', 'Fall', '2021', '3');

INSERT INTO classes VALUES('CS270', 'Computer Organization', 'Spring', '2022', '3');

INSERT INTO classes VALUES('CS270L', 'Computer Organization Lab', 'Spring', '2022', '1');

INSERT INTO classes VALUES('CS233', 'Advanced Data Structures', 'Spring', '2022', '3');

INSERT INTO classes VALUES('CS233L', 'Advanced Data Structures Lab', 'Spring', '2022', '1');

INSERT INTO classes VALUES('CS328', 'Theory of Algorithms', 'Spring', '2022', '3');
