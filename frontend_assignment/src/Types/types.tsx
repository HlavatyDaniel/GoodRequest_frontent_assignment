export enum ButtonTypes {
    Left,
    Right
}

export enum ParagraphTypes {
    FooterNote,
    FooterTitle,
    FooterLogo,
    FooterAbout,
    RectangleRight,
    RectangleLeft,
    LabelLeft,
    LabelRight,
    LabelMain,
    LabelForm,
    LabelData,
    CheckBox
}

export interface UtulokOption {
    id: number,
    name : string
}

export interface InputOption {
    id : number,
    value : number
}