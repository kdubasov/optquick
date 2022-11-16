export const getAdmin = () => {
    const path = window.location.pathname;
    if (path.includes('/admin')) {
        return true;
    }
    return false;
}
