import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export function UserProgressContextProvider({children}) {

    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    const cartContextCtx = {
      progress: userProgress,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout,
    };

    return (
        <UserProgressContext.Provider value={cartContextCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;