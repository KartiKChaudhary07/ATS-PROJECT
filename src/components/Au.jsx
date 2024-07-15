import React from 'react';
// import member1 from './images/member1.jpg';
// import member2 from './images/member2.jpg';
// import member3 from './images/member3.jpg';
// import member4 from './images/member4.jpg';
// import member5 from './images/member5.jpg';
const teamMembers = [
  { name: 'Alice', photo: member1 },
  { name: 'Bob', photo: member2 },
  { name: 'Charlie', photo: member3 },
  { name: 'Dave', photo: member4 },
  { name: 'Eve', photo: member5 },
];
const Au = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.member}>
            <img src={member.photo} alt={member.name} style={styles.photo} />
            <p style={styles.name}>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  member: {
    width: '150px',
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    borderRadius: '50%',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Au;
