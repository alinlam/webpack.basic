let login = (username, password) => {
    if (username !== 'admin' || password !== 'pass@word1'){
        console.log('incorrect login');
    }
    else{
        console.log('logged in');
    }
};

login('admin', 'pass@word1');