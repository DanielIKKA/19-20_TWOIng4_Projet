import React, { PureComponent } from 'react';
import Modal from './Modal';

let bodyStyle = null;

class ModalWrapper extends PureComponent {
    static propTypes = {
        ...Modal.propTypes
    };
    static defaultProps = {
        ...Modal.defaultProps
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.props.show) {
            if (nextProps.show) {
                this.changeBodyStyle();
            } else {
                this.restoreBodyStyle();
            }
        }
    }
    componentDidMount() {
        this.changeBodyStyle();
    }
    componentWillUnmount() {
        this.restoreBodyStyle();
    }
    changeBodyStyle() {
        if (bodyStyle) {
            return;
        }
        // Prevent body from scrolling when a modal is opened
        const body = document.querySelector('body');
        bodyStyle = {
            overflowY: body.style.overflowY
        };
        body.style.overflowY = 'hidden';
    }
    restoreBodyStyle() {
        if (bodyStyle) {
            const body = document.querySelector('body');
            body.style.overflowY = bodyStyle.overflowY;
            bodyStyle = null;
        }
    }
    render() {
        const { onClose, ...props } = this.props;

        return (
            <Modal
                {...props}
                onClose={() => {
                    this.restoreBodyStyle();
                    onClose();
                }}
            />
        );
    }
}

ModalWrapper.Overlay = Modal.Overlay;
ModalWrapper.Content = Modal.Content;
ModalWrapper.Header = Modal.Header;
ModalWrapper.Title = Modal.Title;
ModalWrapper.Body = Modal.Body;
ModalWrapper.Footer = Modal.Footer;

export default ModalWrapper;