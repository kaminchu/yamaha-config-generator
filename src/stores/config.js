//@ flow
import { observable, action, computed } from "mobx";


type Interface = {
    interface: "lan1" | "lan2" | "lan3",
    address: string // "<xxx.xxx.xxx.xxx>" | "dhcp"
};
export class ConfigStore {
    @observable
    interfaces: Interface[] = [];

    @computed
    get getText() {
        const configs = [];

        // interfaces
        const interfacesText = this.interfaces.map(i => `ip ${i.interfaces} address ${i.address}`);

        return [
            ...interfacesText
        ];
    }

    // actions
    @action.bound
    setChangeIntarfaces(intarfaces: Intarface[]){
        this.interfaces = intarfaces;
    }
}
