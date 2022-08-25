export function GalleryWorks(){
    return(
        <div id="blueimp-gallery" className="blueimp-gallery blueimp-gallery-controls" data-use-bootstrap-modal="false">
            <div className="slides"></div>
            <h3 className="title"></h3>
            <a className="prev">
                <i className="fa fa-chevron-left"></i></a>
                <a className="next"><i className="fa fa-chevron-right"></i></a>
                <a className="close">
                <div className="lr">
                    <div className="rl"></div>
                </div>
            </a>
            <ol className="indicator">
            </ol>
            <div className="modal fade">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" aria-hidden="true">&times;</button>
                    <h4 className="modal-title"></h4>
                    </div>
                    <div className="modal-body next"></div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-default pull-left prev"> <i className="glyphicon glyphicon-chevron-left"></i> Previous </button>
                    <button type="button" className="btn btn-primary next"> Next <i className="glyphicon glyphicon-chevron-right"></i> </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
} 
 