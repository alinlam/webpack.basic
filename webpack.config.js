module.exports = {
    entry: ["./app.js", "./utils.js"],
    output: {
        filename: "bundle.js"
    },    
    module:{
        rules:[            
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"                        
                    }
                ]                
            }            
        ],
    },
    resolve:{
        extensions: ['.js', '.es6']
    }
}