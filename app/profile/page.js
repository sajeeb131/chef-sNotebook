// async function getUser(username) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?username=${username}`, { cache: 'no-store' });
//     if (!res.ok) {
//       throw new Error('Failed to fetch user');
//     }
//     return res.json();
//   }
  
//   async function getUserRecipes(userId) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes?author=${userId}`, { cache: 'no-store' });
//     if (!res.ok) {
//       throw new Error('Failed to fetch recipes');
//     }
//     return res.json();
//   }
  
  const Profile = async ({ params }) => {
    // const user = await getUser(params.username);
    // const recipes = await getUserRecipes(user._id);
  
    return (
      <div>
        
      </div>
    );
  }

  export default Profile;
  
  
