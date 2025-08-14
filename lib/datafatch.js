export const projectFetch = async () => {
    const response = await fetch('/projects.json');
    const data = await response.json();
    return data;
};
