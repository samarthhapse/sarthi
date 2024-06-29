import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

const account = new Account(client);

const handleGoogleLogin = async () => {
    setIsGoogleLogin(true);
    account.createOAuth2Session(
        "google",
        "http://localhost:5173",
        "http://localhost:5173/fail"
    );
    getGoogleLoginUser();
};

const getGoogleLoginUser = async () => {
    try {
        const user = await account.get();
        renderProfileScreen(user);
    } catch (err) {
        renderLoginScreen();
    }
};

const renderProfileScreen = async (user) => {
    console.log(user);
    // Add logic to render profile screen
};

const renderLoginScreen = async () => {
    console.log("Error Have Been caught");
    // Add logic to render login screen
};

const handleGoogleLogout = async () => {
    await account.deleteSession("current");
    console.log("The User Have Been Logout Successfully");
};

export {
    account,
    client,
    handleGoogleLogin,
    getGoogleLoginUser,
    renderLoginScreen,
    renderProfileScreen,
    handleGoogleLogout,
};
