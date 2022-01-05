/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  UserController,
  UserControllerInterface,
} from "../UserController";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_firstName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_lastName",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_bio",
        type: "string",
      },
      {
        internalType: "string",
        name: "_eMail",
        type: "string",
      },
    ],
    name: "createUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_managerAddr",
        type: "address",
      },
    ],
    name: "setManagerAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class UserController__factory {
  static readonly abi = _abi;
  static createInterface(): UserControllerInterface {
    return new utils.Interface(_abi) as UserControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserController {
    return new Contract(address, _abi, signerOrProvider) as UserController;
  }
}
