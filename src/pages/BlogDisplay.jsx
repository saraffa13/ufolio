import React from 'react';
import Background from '../assets/bike.jpg';

const BlogDisplay = () => {
  return (
    <div className="w-full h-[90vh] relative pt-5 sm:pt-0">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          filter: 'blur(8px)',
          zIndex: 1,
        }}
      />
      
      <div className="absolute inset-0 top-36 sm:top-5 flex items-center justify-center z-10">
        <iframe
          src="https://khetanutkarsh.wordpress.com/blog/?fbclid=PAZXh0bgNhZW0CMTEAAaZ2ozgjDym06QlqN98YVbJDbSLG-kG99j_mbQfTi3EGHOqdl1kGejhdbDY_aem_XQTZ_TlvbIVq2MjY3ffG6Q"
          title="WordPress Blog"
          width="95%"
          height="100%"
          className="border-none"
          style={{ minHeight: '100vh' }}
        />
      </div>
    </div>
  );
};

export default BlogDisplay;

