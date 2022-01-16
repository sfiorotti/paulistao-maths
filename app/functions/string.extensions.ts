/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
interface String {
    toRemoveSpecialCharacter(): string;
}

String.prototype.toRemoveSpecialCharacter = function (): string {
  return this.toLowerCase().replace(/[àáâãäå]/, 'a').replace(/[èéêë]/, 'e').replace(/[ìíîï]/, 'i').replace(/[òóôõö]/, 'o').replace(/[ùúûü]/, 'u').replace(/[ç]/, 'c')
}
