/* const getUsuarioActivo = (name) => ({
    uid: 'ABC123',
    username: name,
});

const usuarioActivo = getUsuarioActivo('Yulianny');

console.log(usuarioActivo);

const {uid, username} = usuarioActivo;
console.log(uid);
console.log(username); */

    const person = {
        uid: 'ABC123',
        username: 'Yulianny',
        lastName: 'Betancourt',
        other: {
            hobbie: 'Ver one piece',
            episode: 119,
        }
    }
    const loli = ({uid, username, city = 'Medellin', other: {hobbie, episode}}) => {
        
        return {
            id: uid,
            namae: username,
            city,
            hobbie,
            episode,
        }
    }
  
      const {id, namae, city, episode, hobbie} = loli(person);
      
      console.log(id);
      console.log(namae);
      console.log(city);
      console.log(hobbie);
      console.log(episode);