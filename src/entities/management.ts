export interface ManagementProps {
    title: string,
    author: string,
    genre: string
}

export class Management {
    private props: ManagementProps;

    get title () {
        return this.props.title;
    }

    get author () {
        return this.props.author;
    }

    get genre () {
        return this.props.genre;
    }

    constructor (props: ManagementProps) {
        const { title, author, genre } = props;

        this.props = props;
    }
}