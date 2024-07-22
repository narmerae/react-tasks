import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/app/components/HelloWorld";
import Greeting from "@/app/components/Greeting";
import Counter from "@/app/components/Counter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ItemList from "@/app/components/ItemList";
import ToggleText from "@/app/components/ToggleText";
import ToggleButton from "@/app/components/ToggleButton";
import ShowHideMessage from "@/app/components/ShowHideMessage";
import WelcomeMessage from "@/app/components/WelcomeMessage";
import ColorChanger from "@/app/components/ColorChanger";
import UserProfile from "@/app/components/UserProfile";
import ToDoList from "@/app/components/ToDoList";
import FormValidation from "@/app/components/FormValidation";
import Accordion from "@/app/components/Accordion";

export default function Home() {
  return (
        <div>
            <Header/>
            <HelloWorld/>
            <Greeting name={"Narmi"}/>
            <Counter/>
            <ItemList/>
            <ToggleText/>
            <ToggleButton/>
            <ShowHideMessage/>
            <WelcomeMessage/>
            <ColorChanger/>
            <UserProfile/>
            <ToDoList/>
            <FormValidation/>
            <Accordion/>
            <Footer/>
        </div>
  );
}
