import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FirebaseAuth } from "./firebaseConfig";

export function userAuthentication() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userAuth = onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return userAuth;
  }, []);

  return {
    user,
  };
}
