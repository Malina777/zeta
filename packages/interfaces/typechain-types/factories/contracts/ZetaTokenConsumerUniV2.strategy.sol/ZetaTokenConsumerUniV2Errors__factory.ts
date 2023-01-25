/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ZetaTokenConsumerUniV2Errors,
  ZetaTokenConsumerUniV2ErrorsInterface,
} from "../../../contracts/ZetaTokenConsumerUniV2.strategy.sol/ZetaTokenConsumerUniV2Errors";

const _abi = [
  {
    inputs: [],
    name: "InputCantBeZero",
    type: "error",
  },
];

export class ZetaTokenConsumerUniV2Errors__factory {
  static readonly abi = _abi;
  static createInterface(): ZetaTokenConsumerUniV2ErrorsInterface {
    return new utils.Interface(_abi) as ZetaTokenConsumerUniV2ErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaTokenConsumerUniV2Errors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZetaTokenConsumerUniV2Errors;
  }
}
