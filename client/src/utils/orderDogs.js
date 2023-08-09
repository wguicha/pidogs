/* eslint-disable eqeqeq */
export const orderDogs = (dogs, orderParams) => {
    console.log("order dogs:", dogs)
    console.log("params:", orderParams.prop)
    return dogs.sort((x,y) => {
        let propX = "";
        let propY = "";
        switch (orderParams.prop){
            //OPCION PARA ASCENDENTE Y DESCENDENTE
            case "name":
                if(orderParams.mode == "asc"){
                    propX = x.name.toUpperCase();
                    propY = y.name.toUpperCase();
                    if (propX < propY) {
                        return -1;
                    }
                    if (propX > propY) {
                        return 1;
                    }
                    return 0;
                } else {
                    propX = x.name.toUpperCase();
                    propY = y.name.toUpperCase();
                    if (propX > propY) {
                        return -1;
                    }
                    if (propX < propY) {
                        return 1;
                    }
                    return 0;
                }
            case "weight":
            case "height":
            case "lifes_pan":
                if(orderParams.mode == "asc"){
                    propX = x[orderParams.prop].metric.toUpperCase();
                    propY = y[orderParams.prop].metric.toUpperCase();
                    if (propX < propY) {
                        return -1;
                    }
                    if (propX > propY) {
                        return 1;
                    }
                    return 0;
                } else {
                    propX = x[orderParams.prop].metric.toUpperCase();
                    propY = y[orderParams.prop].metric.toUpperCase();
                    if (propX > propY) {
                        return -1;
                    }
                    if (propX < propY) {
                        return 1;
                    }
                    return 0;
                }
            default:
                if(orderParams.mode == "asc"){
                    return x.id - y.id;
                } else {
                    return y.id - x.id;
                }
        }
    })

}