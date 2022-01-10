import database from '@react-native-firebase/database';

export const saveToFirebase = async (data) => {
const res = await database()
    .ref("/messages")
    .push(
        data
    );
if(res)
{
return {success : true}
}
}

export const readDataFromFirebase = async () => {
    return new Promise(async (resolve, reject) => {
        const result = await database()
        .ref("/messages").on('value', function(snapshot) {
            let array = []
            for(let data in snapshot.val())
            {
                array.push(snapshot.val()[data])
            }
            resolve(array)
        });
    })
}