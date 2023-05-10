import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { db, auth } from "../../firebase";
import { getRandomArbitrary } from "@/utils/generateUuid";
import { USER } from "@/constants/user";

// Auth
export const login = () => {
  const provider = new GithubAuthProvider();

  let uuid = getRandomArbitrary(2, 3000000);

  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log("user", user);
        const userLogged = {
          created_at: new window.Date(),
          uuid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        db.collection("users")
          .doc(`${uuid}`)
          .set(userLogged)
          .then((response: any) => {
            resolve(userLogged);
            localStorage.setItem("logged", "true");
            localStorage.setItem("user_id", uuid);
          })
          .catch((error: any) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const updateToken = (token: string) => {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .doc(USER.ID)
      .update({ token: token })
      .then(() => {
        localStorage.setItem("token", token);
        resolve(token);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};
