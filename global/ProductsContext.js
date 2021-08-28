import React, { createContext } from 'react'
import { db } from '../config/Config'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {

    state = {
        products: [],
        wproducts: [],
        accproducts: [],
        design: []
    }

    componentDidMount() {

        const prevProducts = this.state.products;
        const prevWProducts = this.state.wproducts;
        const prevAccProducts = this.state.accproducts;
        const prevDesign = this.state.design;


        db.collection('T-Design').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevDesign.push({
                        ProductID: change.doc.id,
                        Name: change.doc.data().Name,
                        Email: change.doc.data().Email,
                        Adresse: change.doc.data().Adresse,
                        DesignImg: change.doc.data().DesignImg,
                        Quantity: change.doc.data().Quantity,
                        Phone: change.doc.data().Phone,
                        Type: change.doc.data().Type,
                    })
                }
                this.setState({
                    design: prevDesign
                })
            })
        });


        db.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductOldPrice: change.doc.data().ProductOldPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        });

        db.collection('Products-w').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevWProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductOldPrice: change.doc.data().ProductOldPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    wproducts: prevWProducts
                })
            })
        });

        db.collection('Products-acc').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevAccProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductOldPrice: change.doc.data().ProductOldPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    accproducts: prevAccProducts
                })
            })
        })

    }
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] , wproducts: [...this.state.wproducts] , accproducts: [...this.state.accproducts] , design: [...this.state.design]  }}>
                {this.props.children}
            </ProductsContext.Provider>
            
        )
    }
}

