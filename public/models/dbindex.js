module.exports = function (sequalize, DataTypes) {
    var families = sequalize.define("families", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        //password: DataTypes.STRING,
        email: DataTypes.STRING,
        description: DataTypes.STRING,
        //picture: DataTypes.BLOB,
        estAmount: DataTypes.INTEGER
    });
    return families;
};


//<form class="form-horizontal" id="newfamily" action='/api/new' method='POST'>