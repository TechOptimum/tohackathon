import react from "react";
import { Button, Link } from "@chakra-ui/react";
import styles from "../../src/styles/register.module.css";

const RegisterButton = () => {
  return (
    <Link href="https://tech-optimum-hacks-2023.devpost.com/" target="_blank">
      <Button h={"50px"} color={"whiteAlpha.900"} className={styles.btn}>
        Register
      </Button>
    </Link>
  );
};

export default RegisterButton;
